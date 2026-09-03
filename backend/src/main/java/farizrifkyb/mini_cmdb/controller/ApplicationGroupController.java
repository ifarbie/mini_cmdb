package farizrifkyb.mini_cmdb.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import farizrifkyb.mini_cmdb.model.request.ApplicationGroupRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupSimpleResponse;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.ApplicationGroupService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ApplicationGroupController {

    private final ApplicationGroupService applicationGroupService;

    @PostMapping("/api/applications/{applicationId}/groups")
    public WebResponse<ApplicationGroupSimpleResponse> createApplicationGroup(@PathVariable("applicationId") Long applicationId,
            @RequestBody @Valid ApplicationGroupRequest req) {
        return WebResponse.<ApplicationGroupSimpleResponse>builder()
                .data(applicationGroupService.createApplicationGroup(applicationId, req)).build();
    }

    @GetMapping("/api/groups")
    public WebResponse<List<ApplicationGroupResponse>> getApplicationGroups() {
        return WebResponse.<List<ApplicationGroupResponse>>builder()
                .data(applicationGroupService.getApplicationGroups()).build();
    }

    @GetMapping("/api/applications/groups/{groupId}")
    public WebResponse<ApplicationGroupResponse> getApplicationGroupById(@PathVariable("groupId") Long groupId) {
        return WebResponse.<ApplicationGroupResponse>builder()
                .data(applicationGroupService.getApplicationGroupById(groupId)).build();
    }

    @PutMapping("/api/applications/groups/{groupId}")
    public WebResponse<ApplicationGroupSimpleResponse> updateApplicationGroup(@PathVariable("groupId") Long groupId,
            @RequestBody @Valid ApplicationGroupRequest req) {
        return WebResponse.<ApplicationGroupSimpleResponse>builder()
                .data(applicationGroupService.updateApplicationGroup(groupId, req)).build();
    }

    @DeleteMapping("/api/applications/groups/{groupId}")
    public WebResponse<String> deleteApplicationGroup(@PathVariable("groupId") Long groupId) {
        return WebResponse.<String>builder().data(applicationGroupService.deleteApplicationGroup(groupId)).build();
    }
}
