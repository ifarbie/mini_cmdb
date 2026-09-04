package farizrifkyb.mini_cmdb.service;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.ApplicationGroup;
import farizrifkyb.mini_cmdb.entity.Ip;
import farizrifkyb.mini_cmdb.exception.ResourceNotFoundException;
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
                .orElseThrow(() -> new ResourceNotFoundException("Application Group Not Found"));

        Ip ip = ipRepository
                .findById(req.getIpId())
                .orElseThrow(() -> new ResourceNotFoundException("IP Not Found"));

        group.getIps().add(ip);

        applicationGroupRepository.save(group);

        return "OK";
    }

    public String removeIp(Long groupId, GroupIpRequest req) {
        ApplicationGroup group = applicationGroupRepository
                .findById(groupId)
                .orElseThrow(() -> new ResourceNotFoundException("Application Group Not Found"));

        Ip ip = ipRepository
                .findById(req.getIpId())
                .orElseThrow(() -> new ResourceNotFoundException("IP Not Found"));

        group.getIps().remove(ip);

        applicationGroupRepository.save(group);

        return "OK";
    }
}
