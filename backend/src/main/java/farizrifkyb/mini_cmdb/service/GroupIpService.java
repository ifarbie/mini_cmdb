package farizrifkyb.mini_cmdb.service;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.ApplicationGroup;
import farizrifkyb.mini_cmdb.entity.Ip;
import farizrifkyb.mini_cmdb.model.request.GroupIpRequest;
import farizrifkyb.mini_cmdb.repository.ApplicationGroupRepository;
import farizrifkyb.mini_cmdb.repository.IpRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GroupIpService {
    private final ApplicationGroupRepository applicationGroupRepository;
    private final IpRepository ipRepository;

    public String assignIp(Long groupId, GroupIpRequest req) {
        ApplicationGroup group = applicationGroupRepository
                .findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found"));

        Ip ip = ipRepository
                .findById(req.getIpId())
                .orElseThrow(() -> new RuntimeException("IP not found"));

        group.getIps().add(ip);

        applicationGroupRepository.save(group);

        return "OK";
    }

    public String removeIp(Long groupId, GroupIpRequest req) {
        ApplicationGroup group = applicationGroupRepository
                .findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found"));

        Ip ip = ipRepository
                .findById(req.getIpId())
                .orElseThrow(() -> new RuntimeException("IP not found"));

        group.getIps().remove(ip);

        applicationGroupRepository.save(group);

        return "OK";
    }
}
